
const processComponent = (component) =>
{
    if (line_count(component) <= 3)
    {
        component.style.height = "auto";
        component.style.height = (component.scrollHeight * 66.5 / 100) + "px"
    }
}

const line_count = (component) =>
{
    let array = component.value.split(/\r*\n/)
    return array.length
}

export {processComponent}