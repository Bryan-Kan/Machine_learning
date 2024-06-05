function pearson() {

    const genero1 = art_pop;
    const genero2 = pop;

    let dadop = null;
    let dadog = null;
    let xy = null;
    let y2 = null;

    if(genero1.length < genero2.length){
        dadop = genero1;
        dadog = genero2;
    }else{
        dadop = genero2;
        dadog = genero1;
    }

    for (let i = 0; i < dadop.length; i++) {

        xy += dadop[i]['popularidade'] * dadog[i]['popularidade']

        y2 += dadog[i]['popularidade'] * dadog[i]['popularidade']

    }

    console.log(xy);
    console.log(y2);

    const pre = dadop.length*y2

    console.log(pre);

    const correlacao = xy / pre

    console.log(dadop.length);

    console.log(correlacao);

    alert("Correlação de pop com art pop", correlacao)

}

const art_pop = [
    {
     "Genero": "art pop",
     "popularidade": 74
    },
    {
     "Genero": "art pop",
     "popularidade": 73
    },
    {
     "Genero": "art pop",
     "popularidade": 72
    },
    {
     "Genero": "art pop",
     "popularidade": 67
    },
    {
     "Genero": "art pop",
     "popularidade": 58
    },
    {
     "Genero": "art pop",
     "popularidade": 57
    },
    {
     "Genero": "art pop",
     "popularidade": 54
    },
    {
     "Genero": "art pop",
     "popularidade": 47
    }
]

const atl_hip_hop =[
    {
     "Genero": "atl hip hop",
     "popularidade": 72
    },
    {
     "Genero": "atl hip hop",
     "popularidade": 52
    },
    {
     "Genero": "atl hip hop",
     "popularidade": 49
    },
    {
     "Genero": "atl hip hop",
     "popularidade": 49
    },
    {
     "Genero": "atl hip hop",
     "popularidade": 28
    }
]

const australian_pop =[
    {
     "Genero": "australian pop",
     "popularidade": 72
    },
    {
     "Genero": "australian pop",
     "popularidade": 69
    },
    {
     "Genero": "australian pop",
     "popularidade": 66
    },
    {
     "Genero": "australian pop",
     "popularidade": 61
    },
    {
     "Genero": "australian pop",
     "popularidade": 59
    }
]

const big_room = [
    {
     "Genero": "big room",
     "popularidade": 85
    },
    {
     "Genero": "big room",
     "popularidade": 82
    },
    {
     "Genero": "big room",
     "popularidade": 81
    },
    {
     "Genero": "big room",
     "popularidade": 78
    },
    {
     "Genero": "big room",
     "popularidade": 78
    },
    {
     "Genero": "big room",
     "popularidade": 76
    },
    {
     "Genero": "big room",
     "popularidade": 65
    },
    {
     "Genero": "big room",
     "popularidade": 56
    },
    {
     "Genero": "big room",
     "popularidade": 55
    },
    {
     "Genero": "big room",
     "popularidade": 0
    }
]

const boy_band =[
    {
     "Genero": "boy band",
     "popularidade": 87
    },
    {
     "Genero": "boy band",
     "popularidade": 86
    },
    {
     "Genero": "boy band",
     "popularidade": 81
    },
    {
     "Genero": "boy band",
     "popularidade": 78
    },
    {
     "Genero": "boy band",
     "popularidade": 77
    },
    {
     "Genero": "boy band",
     "popularidade": 73
    },
    {
     "Genero": "boy band",
     "popularidade": 73
    },
    {
     "Genero": "boy band",
     "popularidade": 72
    },
    {
     "Genero": "boy band",
     "popularidade": 71
    },
    {
     "Genero": "boy band",
     "popularidade": 71
    },
    {
     "Genero": "boy band",
     "popularidade": 62
    },
    {
     "Genero": "boy band",
     "popularidade": 56
    },
    {
     "Genero": "boy band",
     "popularidade": 55
    },
    {
     "Genero": "boy band",
     "popularidade": 52
    },
    {
     "Genero": "boy band",
     "popularidade": 51
    }
]

const canadian_pop = [
    {
     "Genero": "canadian pop",
     "popularidade": 95
    },
    {
     "Genero": "canadian pop",
     "popularidade": 84
    },
    {
     "Genero": "canadian pop",
     "popularidade": 84
    },
    {
     "Genero": "canadian pop",
     "popularidade": 83
    },
    {
     "Genero": "canadian pop",
     "popularidade": 83
    },
    {
     "Genero": "canadian pop",
     "popularidade": 83
    },
    {
     "Genero": "canadian pop",
     "popularidade": 81
    },
    {
     "Genero": "canadian pop",
     "popularidade": 81
    },
    {
     "Genero": "canadian pop",
     "popularidade": 79
    },
    {
     "Genero": "canadian pop",
     "popularidade": 78
    },
    {
     "Genero": "canadian pop",
     "popularidade": 78
    },
    {
     "Genero": "canadian pop",
     "popularidade": 77
    },
    {
     "Genero": "canadian pop",
     "popularidade": 77
    },
    {
     "Genero": "canadian pop",
     "popularidade": 76
    },
    {
     "Genero": "canadian pop",
     "popularidade": 75
    },
    {
     "Genero": "canadian pop",
     "popularidade": 74
    },
    {
     "Genero": "canadian pop",
     "popularidade": 72
    },
    {
     "Genero": "canadian pop",
     "popularidade": 72
    },
    {
     "Genero": "canadian pop",
     "popularidade": 72
    },
    {
     "Genero": "canadian pop",
     "popularidade": 71
    },
    {
     "Genero": "canadian pop",
     "popularidade": 71
    },
    {
     "Genero": "canadian pop",
     "popularidade": 69
    },
    {
     "Genero": "canadian pop",
     "popularidade": 68
    },
    {
     "Genero": "canadian pop",
     "popularidade": 67
    },
    {
     "Genero": "canadian pop",
     "popularidade": 66
    },
    {
     "Genero": "canadian pop",
     "popularidade": 65
    },
    {
     "Genero": "canadian pop",
     "popularidade": 64
    },
    {
     "Genero": "canadian pop",
     "popularidade": 63
    },
    {
     "Genero": "canadian pop",
     "popularidade": 63
    },
    {
     "Genero": "canadian pop",
     "popularidade": 61
    },
    {
     "Genero": "canadian pop",
     "popularidade": 61
    },
    {
     "Genero": "canadian pop",
     "popularidade": 60
    },
    {
     "Genero": "canadian pop",
     "popularidade": 57
    },
    {
     "Genero": "canadian pop",
     "popularidade": 46
    }
]

const dance_pop =[
    {
     "Genero": "dance pop",
     "popularidade": 97
    },
    {
     "Genero": "dance pop",
     "popularidade": 88
    },
    {
     "Genero": "dance pop",
     "popularidade": 86
    },
    {
     "Genero": "dance pop",
     "popularidade": 86
    },
    {
     "Genero": "dance pop",
     "popularidade": 85
    },
    {
     "Genero": "dance pop",
     "popularidade": 84
    },
    {
     "Genero": "dance pop",
     "popularidade": 84
    },
    {
     "Genero": "dance pop",
     "popularidade": 84
    },
    {
     "Genero": "dance pop",
     "popularidade": 84
    },
    {
     "Genero": "dance pop",
     "popularidade": 83
    },
    {
     "Genero": "dance pop",
     "popularidade": 83
    },
    {
     "Genero": "dance pop",
     "popularidade": 83
    },
    {
     "Genero": "dance pop",
     "popularidade": 82
    },
    {
     "Genero": "dance pop",
     "popularidade": 82
    },
    {
     "Genero": "dance pop",
     "popularidade": 81
    },
    {
     "Genero": "dance pop",
     "popularidade": 81
    },
    {
     "Genero": "dance pop",
     "popularidade": 81
    },
    {
     "Genero": "dance pop",
     "popularidade": 81
    },
    {
     "Genero": "dance pop",
     "popularidade": 81
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 80
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 79
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 78
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 77
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 76
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 75
    },
    {
     "Genero": "dance pop",
     "popularidade": 74
    },
    {
     "Genero": "dance pop",
     "popularidade": 74
    },
    {
     "Genero": "dance pop",
     "popularidade": 74
    },
    {
     "Genero": "dance pop",
     "popularidade": 74
    },
    {
     "Genero": "dance pop",
     "popularidade": 74
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 73
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 72
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 71
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 70
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 69
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 68
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 67
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 66
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 65
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 64
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 63
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 62
    },
    {
     "Genero": "dance pop",
     "popularidade": 61
    },
    {
     "Genero": "dance pop",
     "popularidade": 61
    },
    {
     "Genero": "dance pop",
     "popularidade": 61
    },
    {
     "Genero": "dance pop",
     "popularidade": 61
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 60
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 59
    },
    {
     "Genero": "dance pop",
     "popularidade": 58
    },
    {
     "Genero": "dance pop",
     "popularidade": 58
    },
    {
     "Genero": "dance pop",
     "popularidade": 58
    },
    {
     "Genero": "dance pop",
     "popularidade": 58
    },
    {
     "Genero": "dance pop",
     "popularidade": 58
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 57
    },
    {
     "Genero": "dance pop",
     "popularidade": 56
    },
    {
     "Genero": "dance pop",
     "popularidade": 56
    },
    {
     "Genero": "dance pop",
     "popularidade": 56
    },
    {
     "Genero": "dance pop",
     "popularidade": 55
    },
    {
     "Genero": "dance pop",
     "popularidade": 55
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 54
    },
    {
     "Genero": "dance pop",
     "popularidade": 53
    },
    {
     "Genero": "dance pop",
     "popularidade": 53
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 52
    },
    {
     "Genero": "dance pop",
     "popularidade": 51
    },
    {
     "Genero": "dance pop",
     "popularidade": 51
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 50
    },
    {
     "Genero": "dance pop",
     "popularidade": 48
    },
    {
     "Genero": "dance pop",
     "popularidade": 47
    },
    {
     "Genero": "dance pop",
     "popularidade": 46
    },
    {
     "Genero": "dance pop",
     "popularidade": 46
    },
    {
     "Genero": "dance pop",
     "popularidade": 45
    },
    {
     "Genero": "dance pop",
     "popularidade": 45
    },
    {
     "Genero": "dance pop",
     "popularidade": 45
    },
    {
     "Genero": "dance pop",
     "popularidade": 44
    },
    {
     "Genero": "dance pop",
     "popularidade": 44
    },
    {
     "Genero": "dance pop",
     "popularidade": 44
    },
    {
     "Genero": "dance pop",
     "popularidade": 43
    },
    {
     "Genero": "dance pop",
     "popularidade": 43
    },
    {
     "Genero": "dance pop",
     "popularidade": 42
    },
    {
     "Genero": "dance pop",
     "popularidade": 41
    },
    {
     "Genero": "dance pop",
     "popularidade": 41
    },
    {
     "Genero": "dance pop",
     "popularidade": 41
    },
    {
     "Genero": "dance pop",
     "popularidade": 39
    },
    {
     "Genero": "dance pop",
     "popularidade": 38
    },
    {
     "Genero": "dance pop",
     "popularidade": 38
    },
    {
     "Genero": "dance pop",
     "popularidade": 38
    },
    {
     "Genero": "dance pop",
     "popularidade": 37
    },
    {
     "Genero": "dance pop",
     "popularidade": 36
    },
    {
     "Genero": "dance pop",
     "popularidade": 36
    },
    {
     "Genero": "dance pop",
     "popularidade": 35
    },
    {
     "Genero": "dance pop",
     "popularidade": 34
    },
    {
     "Genero": "dance pop",
     "popularidade": 34
    },
    {
     "Genero": "dance pop",
     "popularidade": 33
    },
    {
     "Genero": "dance pop",
     "popularidade": 31
    },
    {
     "Genero": "dance pop",
     "popularidade": 31
    },
    {
     "Genero": "dance pop",
     "popularidade": 28
    },
    {
     "Genero": "dance pop",
     "popularidade": 28
    },
    {
     "Genero": "dance pop",
     "popularidade": 27
    },
    {
     "Genero": "dance pop",
     "popularidade": 25
    },
    {
     "Genero": "dance pop",
     "popularidade": 18
    },
    {
     "Genero": "dance pop",
     "popularidade": 7
    },
    {
     "Genero": "dance pop",
     "popularidade": 0
    },
    {
     "Genero": "dance pop",
     "popularidade": 0
    },
    {
     "Genero": "dance pop",
     "popularidade": 0
    }
]

const electropop = [
    
    {
     "Genero": "electropop",
     "popularidade": 92
    },
    {
     "Genero": "electropop",
     "popularidade": 86
    },
    {
     "Genero": "electropop",
     "popularidade": 83
    },
    {
     "Genero": "electropop",
     "popularidade": 81
    },
    {
     "Genero": "electropop",
     "popularidade": 81
    },
    {
     "Genero": "electropop",
     "popularidade": 78
    },
    {
     "Genero": "electropop",
     "popularidade": 76
    },
    {
     "Genero": "electropop",
     "popularidade": 76
    },
    {
     "Genero": "electropop",
     "popularidade": 76
    },
    {
     "Genero": "electropop",
     "popularidade": 74
    },
    {
     "Genero": "electropop",
     "popularidade": 72
    },
    {
     "Genero": "electropop",
     "popularidade": 67
    },
    {
     "Genero": "electropop",
     "popularidade": 65
    }
]

const pop = [
    {
     "Genero": "pop",
     "popularidade": 99
    },
    {
     "Genero": "pop",
     "popularidade": 96
    },
    {
     "Genero": "pop",
     "popularidade": 93
    },
    {
     "Genero": "pop",
     "popularidade": 92
    },
    {
     "Genero": "pop",
     "popularidade": 87
    },
    {
     "Genero": "pop",
     "popularidade": 86
    },
    {
     "Genero": "pop",
     "popularidade": 85
    },
    {
     "Genero": "pop",
     "popularidade": 85
    },
    {
     "Genero": "pop",
     "popularidade": 85
    },
    {
     "Genero": "pop",
     "popularidade": 84
    },
    {
     "Genero": "pop",
     "popularidade": 84
    },
    {
     "Genero": "pop",
     "popularidade": 83
    },
    {
     "Genero": "pop",
     "popularidade": 81
    },
    {
     "Genero": "pop",
     "popularidade": 81
    },
    {
     "Genero": "pop",
     "popularidade": 79
    },
    {
     "Genero": "pop",
     "popularidade": 79
    },
    {
     "Genero": "pop",
     "popularidade": 79
    },
    {
     "Genero": "pop",
     "popularidade": 79
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 78
    },
    {
     "Genero": "pop",
     "popularidade": 77
    },
    {
     "Genero": "pop",
     "popularidade": 77
    },
    {
     "Genero": "pop",
     "popularidade": 77
    },
    {
     "Genero": "pop",
     "popularidade": 76
    },
    {
     "Genero": "pop",
     "popularidade": 76
    },
    {
     "Genero": "pop",
     "popularidade": 75
    },
    {
     "Genero": "pop",
     "popularidade": 75
    },
    {
     "Genero": "pop",
     "popularidade": 75
    },
    {
     "Genero": "pop",
     "popularidade": 75
    },
    {
     "Genero": "pop",
     "popularidade": 75
    },
    {
     "Genero": "pop",
     "popularidade": 74
    },
    {
     "Genero": "pop",
     "popularidade": 73
    },
    {
     "Genero": "pop",
     "popularidade": 73
    },
    {
     "Genero": "pop",
     "popularidade": 73
    },
    {
     "Genero": "pop",
     "popularidade": 73
    },
    {
     "Genero": "pop",
     "popularidade": 73
    },
    {
     "Genero": "pop",
     "popularidade": 72
    },
    {
     "Genero": "pop",
     "popularidade": 71
    },
    {
     "Genero": "pop",
     "popularidade": 71
    },
    {
     "Genero": "pop",
     "popularidade": 70
    },
    {
     "Genero": "pop",
     "popularidade": 70
    },
    {
     "Genero": "pop",
     "popularidade": 70
    },
    {
     "Genero": "pop",
     "popularidade": 69
    },
    {
     "Genero": "pop",
     "popularidade": 68
    },
    {
     "Genero": "pop",
     "popularidade": 67
    },
    {
     "Genero": "pop",
     "popularidade": 67
    },
    {
     "Genero": "pop",
     "popularidade": 66
    },
    {
     "Genero": "pop",
     "popularidade": 66
    },
    {
     "Genero": "pop",
     "popularidade": 66
    },
    {
     "Genero": "pop",
     "popularidade": 65
    },
    {
     "Genero": "pop",
     "popularidade": 65
    },
    {
     "Genero": "pop",
     "popularidade": 52
    },
    {
     "Genero": "pop",
     "popularidade": 52
    },
    {
     "Genero": "pop",
     "popularidade": 45
    },
    {
     "Genero": "pop",
     "popularidade": 38
    }
];