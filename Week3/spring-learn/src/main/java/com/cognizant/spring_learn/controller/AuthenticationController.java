package com.cognizant.spring_learn.controller;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    private static final String SECRET =
            "secretkeysecretkeysecretkey123456";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.info("START - authenticate()");

        LOGGER.debug("Authorization Header : {}", authHeader);

        String user = getUser(authHeader);

        LOGGER.debug("User : {}", user);

        String token = generateJwt(user);

        LOGGER.debug("Generated Token : {}", token);

        Map<String, String> map = new HashMap<>();

        map.put("token", token);

        LOGGER.info("END - authenticate()");

        return map;
    }

    private String getUser(String authHeader) {

        LOGGER.info("START - getUser()");

        String encodedCredentials = authHeader.substring(6);

        byte[] decodedBytes =
                Base64.getDecoder().decode(encodedCredentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String user =
                credentials.substring(0, credentials.indexOf(":"));

        LOGGER.debug("Username : {}", user);

        LOGGER.info("END - getUser()");

        return user;
    }

    private String generateJwt(String user) {

        LOGGER.info("START - generateJwt()");

        Key key = new SecretKeySpec(
                SECRET.getBytes(StandardCharsets.UTF_8),
                SignatureAlgorithm.HS256.getJcaName());

        String token = Jwts.builder()
                .subject(user)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(key)
                .compact();

        LOGGER.info("END - generateJwt()");

        return token;
    }
}