import dayjs from 'dayjs'
export const sortPostsByDate = (posts) =>
    posts
        .filter(({data}) => {
            return import.meta.env.PROD ? !data.draft : true
        })
        .sort((a, b) => {
            if(dayjs(b.data.date).unix()===dayjs(a.data.date).unix()){
                return b.id - a.id;
            }
            return dayjs(b.data.date).unix() - dayjs(a.data.date).unix();
        });
