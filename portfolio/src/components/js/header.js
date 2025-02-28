import resume from '@/assets/Resume - Valentinus Gilbert Sanjaya.pdf';

export default {
    components: {
    },
    setup() {
        const downloadResume = () => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'Resume - Valentinus Gilbert Sanjaya.pdf';
            link.click();
        }

        return {
            downloadResume,
        }
    }
}