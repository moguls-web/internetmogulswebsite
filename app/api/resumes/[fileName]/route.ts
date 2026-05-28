import { NextRequest, NextResponse } from 'next/server'
import { createReadStream, existsSync } from 'fs'
import { stat } from 'fs/promises'
import { join, basename } from 'path'

function getContentType(fileName: string): string {
  const ext = fileName.toLowerCase().split('.').pop()
  if (ext === 'pdf') return 'application/pdf'
  if (ext === 'doc') return 'application/msword'
  if (ext === 'docx') {
    return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }
  return 'application/octet-stream'
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ fileName: string }> }
) {
  try {
    const { fileName } = await params
    const safeFileName = basename(fileName)
    const filePath = join(process.cwd(), 'public', 'resumes', safeFileName)

    if (!existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const fileStat = await stat(filePath)
    const stream = createReadStream(filePath)

    return new NextResponse(stream as any, {
      status: 200,
      headers: {
        'Content-Type': getContentType(safeFileName),
        'Content-Length': fileStat.size.toString(),
        'Cache-Control': 'private, max-age=3600',
        'Content-Disposition': `inline; filename="${safeFileName}"`,
      },
    })
  } catch (error) {
    console.error('Error serving resume file:', error)
    return NextResponse.json({ error: 'Failed to serve file' }, { status: 500 })
  }
}

