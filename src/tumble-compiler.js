
let compiler = null;

/* global Tumble */

export async function initCompiler(onPrint) {
    await new Promise((res) => {
        window.addEventListener('load', () => res());
        if (typeof(Tumble) !== 'undefined') {
            res();
        }
    });
    compiler = await Tumble({
        'print': function (text) { onPrint(text) },
        'printErr': function (text) { onPrint(text) },
    });
    await compiler.ready;
}

export function runProgram(program) {
    compiler.FS.writeFile('program.tumble', program);
    compiler.callMain(['program.tumble', '-e', 'jit', '-t', 'wasm32', "--force-target"]);
}
