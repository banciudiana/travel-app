import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
//const express=require('express')

const app=express()


app.listen(process.env.PORT,()=>{ console.log("Server is Running")})