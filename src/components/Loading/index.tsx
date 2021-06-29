import { LoaderContent, Circle } from './styles';


export function Loading() {
    return (
        <LoaderContent>
            <main>
                <div>
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                </div>
            </main>
        </LoaderContent>
    )
}