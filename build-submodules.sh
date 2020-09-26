
if [ ! -f static/tumble.wasm ]
then
    cd build/llvm/ && \
    bash build-llvm.sh && \
    cd ../tumble/ && \
    make && \
    cd ../../ && \
    cp build/tumble/bin/tumble.js src/ && \
    cp build/tumble/bin/tumble.wasm static/
fi
