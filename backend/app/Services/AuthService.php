<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register(array $data)
    {
        DB::insert(
            "INSERT INTO users
            (name, email, password, role, created_at, updated_at)
            VALUES (?, ?, ?, ?, NOW(), NOW())",
            [
                $data['name'],
                $data['email'],
                Hash::make($data['password']),
                $data['role'],
            ]
        );

        return DB::selectOne(
            "SELECT id, name, email, role
             FROM users
             WHERE email = ?",
            [
                $data['email']
            ]
        );
    }

    public function login(array $credentials)
    {
        /*
        |--------------------------------------------------------------------------
        | SQL Query (for database project demonstration)
        |--------------------------------------------------------------------------
        */

        DB::selectOne(
            "SELECT * FROM users WHERE email = ?",
            [
                $credentials['email']
            ]
        );

        /*
        |--------------------------------------------------------------------------
        | JWT Authentication
        |--------------------------------------------------------------------------
        */

        $token = Auth::guard('api')->attempt([
            'email' => $credentials['email'],
            'password' => $credentials['password'],
        ]);

        if (!$token) {
            return null;
        }

        return [

            'token' => $token,

            'user' => Auth::guard('api')->user(),

        ];
    }

    public function logout(): void
    {
        auth('api')->logout();
    }

    public function me()
    {
        $id = auth('api')->id();

        return DB::selectOne(
            "SELECT id, name, email, role
             FROM users
             WHERE id = ?",
            [
                $id
            ]
        );
    }
}