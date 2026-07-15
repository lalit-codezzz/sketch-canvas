export default function GenericError ({message}: {message: string}) {
    return <p className="text-red-400 text-xs">{message}</p>
}