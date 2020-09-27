ODIR=./objs
BDIR=./bin

IDIR=../../tumble/src
SDIR=../../tumble/src

CC=emcc
LINK=em++
LLVMCONF=llvm-config
CFLAGS=-O3 -I$(IDIR) -Wall $(FLAGS) -I../../llvm/llvm/include/ -I../llvm/include/ -s INVOKE_RUN=0 \
	-s MODULARIZE=1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT=web -s FORCE_FILESYSTEM=1 \
	-s ERROR_ON_UNDEFINED_SYMBOLS=0 -s EXPORT_NAME=Tumble -s EXPORTED_RUNTIME_METHODS='["callMain", "FS"]' \
	-s MAIN_MODULE=1
LIBS=-lpthread -ldl -L../llvm/lib/ `$(LLVMCONF) --libs core orcjit webassembly target support executionengine interpreter --link-static` -lm

_SRC=$(wildcard $(SDIR)/*/*.c) $(wildcard $(SDIR)/*.c)
OBJ=$(patsubst $(SDIR)/%.c,$(ODIR)/%.o,$(_SRC))

DEPS=$(wildcard $(IDIR)/*/*.h) $(wildcard $(IDIR)/*.h)

_BIN=tumble.js
BIN=$(patsubst %,$(BDIR)/%,$(_BIN))

.PHONY: all
all: $(BIN) 

.PHONY: install
install: all
	cp $(BIN) /usr/bin/

$(BDIR)/$(_BIN): $(OBJ)
	mkdir -p `dirname $@`
	$(LINK) $(CFLAGS) -o $@ $^ $(LIBS)

$(ODIR)/%.o: $(SDIR)/%.c $(DEPS)
	mkdir -p `dirname $@`
	$(CC) $(CFLAGS) -c -o $@ $<
	
.PHONY: check
check:
	./test/run-test.sh ./test/tests/
	
.PHONY: clean
clean:
	rm -fr $(ODIR)/*

.PHONY: cleanall
cleanall:
	rm -fr $(ODIR)/* $(BDIR)/*