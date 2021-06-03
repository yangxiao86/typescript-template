import * as vertexShaderSource from './default.vert';
import * as fragmentShaderSource from './default.frag';

// 创建着色器方法，输入参数：渲染上下文，着色器类型，数据源
function createShader(gl: WebGL2RenderingContext | WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type); // 创建着色器对象

    if (shader === null) {
        throw new Error('createShader 异常');
    }
    gl.shaderSource(shader, source); // 提供数据源
    gl.compileShader(shader); // 编译 -> 生成着色器

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl: WebGL2RenderingContext | WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    const program = gl.createProgram();

    if (program === null) {
        throw new Error('createProgram 异常');
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (success) {
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

const canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

if (gl === null) {
    throw new Error('webgl 异常');
}

canvas.width = 400;
canvas.height = 400;
gl.viewport(0, 0, canvas.width, canvas.height);

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource.default) as WebGLShader;
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource.default) as WebGLShader;

const program = createProgram(gl, vertexShader, fragmentShader) as WebGLProgram;

const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
const positionBuffer = gl.createBuffer();
const positions = [
    0, 0,
    0, 0.5,
    0.9, 0,
];

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
// 清空画布
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);
// 告诉它用我们之前写好的着色程序（一个着色器对）
gl.useProgram(program);
gl.enableVertexAttribArray(positionAttributeLocation);
// 将绑定点绑定到缓冲数据（positionBuffer）
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
const size = 2; // 每次迭代运行提取两个单位数据
const type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
const normalize = false; // 不需要归一化数据
const stride = 0; // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）
// 每次迭代运行运动多少内存到下一个数据开始点
const offset = 0; // 从缓冲起始位置开始读取

gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

gl.drawArrays(gl.TRIANGLES, 0, 3);
