
let compiler = null;

/* global Tumble */

export async function initCompiler(onPrint) {
    compiler = await Tumble({
        print: onPrint,
        printErr: onPrint,
    });
    await compiler.ready;
}

export function runProgram(program) {
    compiler.FS.writeFile("program.tumble", program);
    compiler.callMain(["program.tumble", "-e", "jit", "-t", "wasm32", "--force-target"]);
}
