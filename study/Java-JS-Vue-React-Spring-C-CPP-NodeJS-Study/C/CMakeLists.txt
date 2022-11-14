cmake_minimum_required(VERSION 3.0)
project(C C)

set(CMAKE_C_STANDARD 99)

add_library(C library.c cmake-build-debug/test/test1.cpp cmake-build-debug/test/test1.h)
