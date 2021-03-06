
emcmake cmake \
    -G Ninja \
    -DCMAKE_C_FLAGS="-s ERROR_ON_UNDEFINED_SYMBOLS=0" \
    -DCMAKE_CXX_FLAGS="-s ERROR_ON_UNDEFINED_SYMBOLS=0" \
    -DCMAKE_BUILD_TYPE="Release" \
    -DLLVM_TARGETS_TO_BUILD="WebAssembly" \
    -DLLVM_BUILD_TOOLS=OFF \
    -DLLVM_BUILD_EXAMPLES=OFF \
    -DLLVM_BUILD_TESTS=OFF \
    -DLLVM_BUILD_BENCHMARKS=OFF \
    -DLLVM_ENABLE_UNWIND_TABLES=OFF \
    -DLLVM_TARGET_ARCH="wasm32" \
    -DLLVM_ENABLE_THREADS=OFF \
    -DLLVM_ENABLE_LIBPFM=OFF \
    -DLLVM_ENABLE_ZLIB=OFF \
    -DLLVM_ENABLE_BINDINGS=OFF \
    -DLLVM_ENABLE_DIA_SDK=OFF \
    -DLLVM_ENABLE_Z3_SOLVER=OFF \
    -DLLVM_INSTALL_UTILS=OFF \
    -DLLVM_ENABLE_LIBXML2=OFF \
    -DLLVM_ENABLE_TERMINFO=OFF \
    -DLLVM_ENABLE_FFI=OFF \
    -DLLVM_ENABLE_LIBEDIT=OFF \
    -DLLVM_ENABLE_LIBPFM=OFF \
    -DLLVM_TABLEGEN=/usr/bin/llvm-tblgen \
    ../../llvm/llvm/
ninja
