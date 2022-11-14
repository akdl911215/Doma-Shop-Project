package com.example.demo.nativeinterface;

public class HelloSpring {
    public native String print();

    static {
        System.loadLibrary("Hello");
    }
}
