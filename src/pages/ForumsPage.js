import ForumView from '../components/forum/ForumView';

function ForumsPage() {
    return (
        <div>
            {/* <ForumHome /> */}
            {/* <ForumAdd /> */}
            <ForumView
                date='28 Oct, 2023'
                title={'Title Title Title Title'}
                author='John Doe'
                tags={['React', 'Java']}
                content={`This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`}
            />
        </div>
    )
}

export default ForumsPage;
