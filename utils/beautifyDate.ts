export function beautifyDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en', { month: 'long', year: 'numeric' });
}
