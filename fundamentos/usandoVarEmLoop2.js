const funs = []

for (var i = 0; i < 10; i++) {
    funs.push(function() {
        console.log(i)
    }) 
}

funs[2]()
funs[8]()