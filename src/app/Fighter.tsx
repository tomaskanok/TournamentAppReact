interface Fighter {
    name: string;
    record: string;
    corner: "blue" | "red";
}

export default function Fighter(props: Fighter) {
    return (
        <div className="flex">
            {
                props.corner === 'blue' &&
                <span className="bg-blue-600 w-2 h-6 block border border-blue-600 mr-2"></span>
            }
            {
                props.corner === 'red' &&
                <span className="bg-red-600 w-2 h-6 block border border-red-600 mr-2"></span>
            }

            <span>{props.name}, {props.record}</span>
        </div>
    );
}