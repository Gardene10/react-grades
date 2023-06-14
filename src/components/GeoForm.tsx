import { Circle, Square } from "./Square"

export const GeoForm = () => {
    return(
        <div className="text-2xl font-bold" >
            <h3> formas </h3>
            <div className="flex gap-20 border-2 p-3" >
            <Square/>
            <Circle/>
            </div>
        </div>
    )
}