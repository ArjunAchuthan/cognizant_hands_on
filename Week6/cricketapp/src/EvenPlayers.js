function EvenPlayers(props) {

    const [second, fourth, sixth] = props.players;

    return (
        <div>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>
        </div>
    );
}

export default EvenPlayers;