const tvTypeNames = inventory.map((invent) => {
    return invent.name
})
console.log(tvTypeNames);

const soldOutTVs = inventory.filter((invent) => {
    if (invent.originalStock - invent.sold === 0) {
        return invent
    }
})
console.log(soldOutTVs);

const ambiLightTVs = inventory.filter((invent) => {
    if (invent.options.ambiLight === true) {
        return invent
    }
})
console.log(ambiLightTVs)

const priceLowToHigh = inventory.sort((a, b) => {
    return (a.price - b.price)
})
console.log(priceLowToHigh);