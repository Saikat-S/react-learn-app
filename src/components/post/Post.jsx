
const names = ['Saikat', 'Sharma'];
function Post(){    
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return <div>
        <p>{chosenName}</p>
        <p>This is a post </p>
    </div>
}

export default Post