<div class="page">
    <iframe class="resume" src="resume.pdf" title="Resume"></iframe>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .resume {
        width: 600px;
        margin-top: 96px;
        height: 100vh;
    }

    @media (max-width: 810px) {
        .resume {
            width: calc(100% - 16px);
            margin-top: 82px;
        }
    }

    @media (max-width: 600px) {
        .resume {
            width: calc(100% - 8px);
            margin-top: 64px;
        }
    }
</style>
