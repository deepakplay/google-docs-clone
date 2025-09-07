import Editor from "./editor";

export default async function DocumentPage({ params }: PageProps<"/documents/[documentId]">) {
    const { documentId } = await params;

    return (
        <div className="min-h-screen bg-[#FAFBFD] px-4 print:p-0">
            {/* <h1>View document {documentId}</h1> */}
            <Editor />
        </div>
    )
}