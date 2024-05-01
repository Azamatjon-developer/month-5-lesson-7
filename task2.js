const create = (params) => {
    params.preventDefault();
    let result = document.getElementById("result");
    let width = params.target[0].value;
    let height = params.target[1].value;
    let radius = params.target[2].value;
    let bg_color = params.target[3].value;
    console.log(width, height, bg_color, radius);
    result.style.width = `${width}px`;
    result.style.height= `${height}px`;
    result.style.backgroundColor = `${bg_color}`;
    result.style.borderRadius = `${radius}`;
}