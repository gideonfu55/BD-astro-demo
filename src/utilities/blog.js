import dateFns from 'date-fns'

// Function to sort the order of posts according to date (from the latest to earliest):
export function sortPosts(posts) {
    return posts.sort((a, b) => {
        const aDate = new Date(a.frontmatter.date)
        const bDate = new Date(b.frontmatter.date)
    
        return bDate.getTime() - aDate.getTime()
    })
}

// Create function for Date format presented to be readable on page:
export function readableDate(date) {
    return dateFns.format(date, 'MMM do, yyyy')
}