export default function Fighter(props) {
    return (
        <div className="flex">
            {
                props.corner === 'blue' &&
                <span className="bg-blue-600 w-2 h-6 block border border-blue-600"></span>
            }
            {
                props.corner === 'red' &&
                <span className="bg-red-600 w-2 h-6 block border border-red-600"></span>
            }

            <span>{props.name}, {props.record}</span>
        </div>
    );
}