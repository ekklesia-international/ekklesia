export type TableHeaders = {
    accessorKey: string,
    header: string
}

export type ResponsiveInfo = {
    title: string,
    content: string
}

export type AccordionInfo = {
    bible_verse: Array<string>,
    article: string,
    responsive_info: Array<ResponsiveInfo>
}

export type TableData = {
    id: string
    column_1: string,
    column_2: string,
    column_3: string,
    column_4: string,
    accordion_info: AccordionInfo
}

export  type TableInfo = {
    headers: Array<TableHeaders>,
    data: Array<TableData>
}