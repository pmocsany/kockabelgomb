describe('A calcRadius függvény tesztje', ()=>{
   it ('Bemenet 20-ra elvárt érték  2.23606797749979', ()=>{
    let actual = calcRadius(20)
    let expected= 2.23606797749979
    expect(actual).toBe(expected)
   })
    
   it ('Bemenet 120-ra elvárt érték 5.477225575051661', ()=>{
    let actual = calcRadius(120)
    let expected = 5.477225575051661
    expect(actual).toBe(expected)
   })

   it ('Bemenet 500-ra elvárt érték 11.180339887498949', ()=>{
    let actual = calcRadius(500)
    let expected = 11.180339887498949
    expect(actual).toBe(expected)
   })
})

