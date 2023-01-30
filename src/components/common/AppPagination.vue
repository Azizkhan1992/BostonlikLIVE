<template>
    <div class="pagination-container">
        <div class="footer-left-block">
            <button @click="prevPage" class="pagination-right-btn">
                <img class="request-left" src="@/assets/src/Icons/Vector-left.svg" alt="" />
                Пред .
            </button>
            <button @click="nextPage" class="pagination-left-btn">
                <img class="request-right-img" src="@/assets/src/Icons/chevron-right.svg" alt="" />
                След .
            </button>
        </div>
        <div class="footer-center">
            <span>Страница</span>
            <input type="text" :value="pageNumber" />
            <span>из {{currentPages}}</span>
            <button>
                <img src="@/assets/src/Icons/chevron-right.svg" alt="" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-pagination',
    props: {
        data: {
            type: Array,
            default: () => []
        },
        limit: {
            type: [Number, String],
            default: 2
        }
    },
    data() {
        return {
            paginationData: null,
            pageNumber: 1
        }
    },
    computed: {
        currentPages() {
            let currentRequestPages;
            console.log(this.data)
            if (this.data) {
                let x = this.data.length
                let y = this.limit
                currentRequestPages = Math.ceil(x / y)
                
            }

            return currentRequestPages
        },
    },
    methods: {
        nextPage() {
            if (this.pageNumber < this.currentPages)
                this.pageNumber++
        },
        prevPage() {
            if (this.pageNumber > 1) {
                this.pageNumber--
            }
        },
        paginateData() {
            let pagination;
            if (this.data) {
                const start = this.pageNumber * this.limit,
                    end = start + this.limit;
                pagination = this.data.slice(start, end)

                return this.$emit('paginate', pagination)
            }
            return []
        },
    },
    watch: {
        pageNumber: function (val) {
            console.log(val)
            this.paginateData()
        }
    }

}
</script>

<style>
.pagination-container{
    width: 100%; 
    margin: auto;
    display: flex;
}
.pagination-container .footer-left-block{
    width: 40%;
    margin: auto;   
    display: flex;
}
.pagination-container .footer-left-block button{
    width: 45%;
    margin: auto;
    background: #FFFFFF;
    display: flex;
    height: 50px;
    border-radius: 15px;
}
.pagination-container .footer-left-block .pagination-right-btn{
    flex-direction: row-reverse;
    position: relative;
    align-items: center;
    justify-items: center;
    padding-right: 25px;
    box-sizing: border-box;
}
.pagination-container .footer-left-block .pagination-right-btn img{
    display: inline-block;
    width: 10px;
    margin: auto;
}
.pagination-container .footer-left-block .pagination-left-btn{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}
.pagination-container .footer-left-block .pagination-left-btn img{
    margin-left: 10px;
    margin-top: 5px;
}
.pagination-container .footer-center{
    width: 40%;
    margin: auto;
    display: flex;
}
.pagination-container .footer-center span{
    display: inline-block;
    color:  #A0AEC0;
    font-size: 1rem;
    font-weight: 600;
    width: 12%;
    margin: auto;
}
.pagination-container .footer-center input{
    display: inline-block;
    width: 12%;
    height: 40px;
    margin: auto;
    background: #FFFFFF;
    padding-left: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid;
}
.pagination-container .footer-center input:hover{
    border: 2px solid #1C9E3C;
}
.pagination-container .footer-center button{
    display: block;
    background: #FFFFFF;
    width: 12%;
    height: 40px;
    border-radius: 5px;
}
.pagination-container .footer-center button img{
    display: block;
    width: auto;
    margin: auto;
}
</style>