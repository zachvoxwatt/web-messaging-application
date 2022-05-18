const checkLongText = (component, lcnt, baseH, gap, maxLines) =>
{
    let scrlh = component.scrollHeight

    if (lcnt === 1 && (scrlh === baseH))
    {
        resizeComponent(component, 1)
        return
    } 
    
    else if (lcnt === 1 && (scrlh === baseH + gap))
    {
        resizeComponent(component, 2)
        return
    }

    else if (lcnt === 2 && (scrlh === baseH + gap))
    {
        resizeComponent(component, 2)
        return
    }

    else if (lcnt === 2 && (scrlh === baseH + gap * 2))
    {
        resizeComponent(component, 3)
        return
    }
}

const checkLineNumbers = (component, par, maxLines) =>
{
    if (par > 3) return false
    else
    {
        for (let i = 0; i < maxLines; i++)
        {
            if (par < maxLines + 1)
            {
                resizeComponent(component, par)
                break
            }
        }
        return true
    }
}

const resizeComponent = (component, i) => { component.rows = i }

export {checkLineNumbers, checkLongText}