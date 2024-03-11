export default function Notas(n1, n2, n3, n4){
    const notas = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4);
    return notas / 4;
}
