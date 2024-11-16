import passport from "passport";
import { Strategy as OpenIDConnectStrategy } from "passport-openidconnect";
import session from "express-session";
import { Express } from "express";

export function setupAuth(app: Express) {
  // Session middleware
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "defaultSecret",
      resave: false,
      saveUninitialized: true,
    })
  );

  // Configure Passport with Worldcoin strategy
  passport.use(
    "worldcoin",
    new OpenIDConnectStrategy(
      {
        issuer: "https://id.worldcoin.org",
        clientID: process.env.WLD_CLIENT_ID || "",
        clientSecret: process.env.WLD_CLIENT_SECRET || "",
        authorizationURL: "https://id.worldcoin.org/authorize",
        tokenURL: "https://id.worldcoin.org/oauth/token",
        userInfoURL: "https://id.worldcoin.org/userinfo",
        callbackURL: "http://localhost:3000/auth/worldcoin/callback",
      },
      (issuer, profile, done) => {
        const user = {
          id: profile.sub,
          name: profile.sub,
          verificationLevel:
            profile["https://id.worldcoin.org/v1"].verification_level,
        };
        return done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Authentication routes
  app.get("/auth/worldcoin", passport.authenticate("worldcoin"));
  app.get(
    "/auth/worldcoin/callback",
    passport.authenticate("worldcoin", {
      successRedirect: "/auth/success",
      failureRedirect: "/auth/failure",
    })
  );

  app.get("/auth/success", (req, res) => {
    res.json({ user: req.user });
  });

  app.get("/auth/failure", (req, res) => {
    res.status(401).send("Authentication failed");
  });
}
