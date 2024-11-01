const NavigationHandle = (navigation, id) => {
    switch (id) {
        case 1:
            navigation.navigate('rotaPacifista');
            break;
        case 2:
            navigation.navigate('rotaNeutra');
            break;
        case 3:
            navigation.navigate('rotaGenocida');
            break;
        case 4:
            navigation.navigate('personagensPacifista');
            break;
        case 5:
            navigation.navigate('personagensNeutra');
            break;
        case 6:
            navigation.navigate('personagensGenocida');
            break;
        case 7:
            navigation.navigate('rotasHistoria');
            break;
        case 8:
            navigation.navigate('mudancasPacifista');
            break;
        case 9:
            navigation.navigate('mudancasNeutra');
            break;
        case 10:
            navigation.navigate('mudancasGenocida');
            break;
        case 11:
            navigation.navigate('curiosidadesMisterios');
            break;
        default:
            navigation.navigate('Home');
    }
};

export default NavigationHandle;