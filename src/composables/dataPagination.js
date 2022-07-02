import { ref, onMounted, onBeforeMount } from "vue";
import { getRepos } from "../api";


const fetchDataAndPaginate = () => {
    const loading = ref(false);
    const initialFetchLoading = ref(false)
    const _err = ref(null);
    let data = ref([]);
    let page = ref(1);

    const getData = async () => {
        initialFetchLoading.value = true
        try {
            const repos = await getRepos(page.value);
            data.value = [...data.value, ...repos.items];
            initialFetchLoading.value = false
        } catch (err) {
            console.log(err);
            _err.value = err.message;
            initialFetchLoading.value = false
        } 
    };

    const getNextDataSet = () => {
        window.onscroll = async () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                loading.value = true;
                try {
                    const repos = await getRepos(page.value++);
                    page.value = page.value++
                    data.value = [...data.value, ...repos.items];
                    console.log(data.value);
                    console.log(repos)
                    loading.value = false;
                } catch (err) {
                    console.log(err.message,'here');
                    _err.value = err.message;
                    loading.value = false;
                }
            }
        };
    };

    onMounted(() => {
        getNextDataSet();
    });

    onBeforeMount(() => {
        getData();
    });

    return { loading, getData, data, getNextDataSet, initialFetchLoading };

}

export default fetchDataAndPaginate