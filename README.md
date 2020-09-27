# Tumble Playground

This is a website that allows executing the Tumbleweed programing language
inside the browser using WebAssembly.

Both LLVM and the Tumbleweed compiler where compiled to WebAssembly using
Emscripten. Since LLVM (understandably) doesn't support JIT for the
wasm32 target, this website will only use the LLVM IR Interpreter.
