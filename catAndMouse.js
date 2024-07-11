const catAndMouse = (posA, posB, posC) => {
    const catA = Math.abs(posA - posC); //obtengo la distancia entre el gato A y el raton
    const catB = Math.abs(posB - posC); //obtengo la distancia entre el gato B y el raton
    if (catA === catB) { //si las distancias son iguales, el raton se escapa
        return 'Mouse C';
    }
    return catA < catB ? 'Cat A' : 'Cat B'; 
    //si la distancia del gato A es menor a la del gato B, 
    //el gato A atrapa al raton, de lo contrario, el gato B atrapa al raton
    }