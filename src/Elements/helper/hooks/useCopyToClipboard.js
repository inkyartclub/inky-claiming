import { useState } from 'react'
import toast from "react-hot-toast";

// type CopiedValue = string | null
// type CopyFn = (text: string) => Promise<boolean> // Return success

function useCopyToClipboard() {
    const [copiedText, setCopiedText] = useState(null)

    const copy = async text => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
        }

        // Try to save to clipboard then save it in the state if worked
        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            toast.success(`Copied NFT ID "${text}" to clipboard.`, {
                position: 'top-right',
                duration: 5000
            })
            return true
        } catch (error) {
            console.warn('Copy failed', error)
            setCopiedText(null)
            return false
        }
    }

    return [copiedText, copy]
}

export default useCopyToClipboard
