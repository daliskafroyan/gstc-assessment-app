import { FileRouter } from '@/app/api/uploadthing/core'
import {
    generateUploadButton,
} from '@uploadthing/react'

export const UploadButton = generateUploadButton<FileRouter>()
