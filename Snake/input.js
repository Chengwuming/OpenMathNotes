let inputDirection = { x: 0, y: 1 };
let lastInputDirection = { x: 0, y: 1 };

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp" && lastInputDirection.y !== 1) {
        inputDirection = { x: 0, y: -1 };
    } else if (event.key === "ArrowDown" && lastInputDirection.y !== -1) {
        inputDirection = { x: 0, y: 1 };
    } else if (event.key === "ArrowRight" && lastInputDirection.x !== -1) {
        inputDirection = { x: 1, y: 0 };
    } else if (event.key === "ArrowLeft" && lastInputDirection.x !== 1) {
        inputDirection = { x: -1, y: 0 };
    }
});


const getInputDirection = () => {
    lastInputDirection = inputDirection;
    return inputDirection;
}