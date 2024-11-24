<?php
// utils/auth.php

$key = "your_secret_key"; // Secret key for JWT

// Function to encode JWT token
function generateJWT($userId) {
    global $key;

    $issuedAt = time();
    $expirationTime = $issuedAt + 3600;  // JWT valid for 1 hour from the issued time
    $payload = [
        "iss" => "swift_routes",   // Issuer
        "iat" => $issuedAt,        // Issued at time
        "exp" => $expirationTime,  // Expiration time
        "user_id" => $userId       // User ID to identify the user
    ];

    // Encode JWT: header (base64url), payload (base64url), and signature (HMAC with SHA256)
    $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
    $headerBase64 = base64UrlEncode($header);
    $payloadBase64 = base64UrlEncode(json_encode($payload));

    // Create signature using the HMAC algorithm
    $signature = hash_hmac('sha256', "$headerBase64.$payloadBase64", $key, true);
    $signatureBase64 = base64UrlEncode($signature);

    // Return the JWT token
    return "$headerBase64.$payloadBase64.$signatureBase64";
}

// Function to decode JWT token and verify its validity
function decodeJWT($jwt) {
    global $key;

    // Split the JWT into its components (header, payload, signature)
    $parts = explode('.', $jwt);
    if (count($parts) !== 3) {
        return null; // Invalid JWT structure
    }

    list($headerBase64, $payloadBase64, $signatureBase64) = $parts;

    // Decode the header and payload from Base64Url
    $header = json_decode(base64UrlDecode($headerBase64), true);
    $payload = json_decode(base64UrlDecode($payloadBase64), true);

    // Check if the JWT is expired
    if (isset($payload['exp']) && $payload['exp'] < time()) {
        return null; // Token has expired
    }

    // Verify the signature
    $expectedSignature = hash_hmac('sha256', "$headerBase64.$payloadBase64", $key, true);
    $expectedSignatureBase64 = base64UrlEncode($expectedSignature);

    if ($expectedSignatureBase64 !== $signatureBase64) {
        return null; // Signature does not match
    }

    // Return the decoded payload if the JWT is valid
    return $payload;
}

// Base64Url encoding (URL-safe version of base64)
function base64UrlEncode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

// Base64Url decoding
function base64UrlDecode($data) {
    return base64_decode(strtr($data, '-_', '+/'));
}
?>