<template>
    <section class="articleItem">
        <section class="row1">
            <section class="left">
                <h2 class="title">标题</h2>
                <p class="desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
            </section>
            <div class="imgWrapper" style="background-image:url(http://img.hb.aicdn.com/f3bbb6785e0c2b4d14a7d8c9b78be705cc3e1e6419aad-b48HEq_fw658)"></div>
        </section>
        <section class="row2">
            <div class="tag">标签</div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'articleItem',
    data() {
        return {
            title: '文章项'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../../common/base.scss';
@import '../../../common/color.scss';

.articleItem {
    position: relative;
    margin-top: 20px;
    padding: 20px;
    width: $containerWidth;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    box-sizing: border-box;

    .row1 {
        display: flex;

        .left {

            .title {
                display: inline-block;
                color: $darkBlack;
                transition: 0.3s;
                font-size: 18px;
                font-weight: bold;
                border-bottom: 1px solid #ffffff;
                cursor: pointer;

                &:hover {
                    border-bottom: 1px solid $darkBlack;
                }
            }

            .desc {
                color: $lightBlack;
                margin-top: 10px;
                font-size: 14px;
                line-height: 20px;
            }
        }

        .imgWrapper {
            flex-shrink: 0;
            margin-left: 20px;
            width: 160px;
            height: 100px;
            background: no-repeat center;
            background-size: cover;
        }
    }

    .row2 {
        margin-top: 10px;
        display: flex;

        .tag {
            transition: 0.3s;
            padding: 3px 5px;
            border: 1px solid $blue500;
            border-radius: 2px;
            font-size: 12px;
            color: $blue500;
            cursor: pointer;
            user-select: none;

            &:hover {
                background: $blue50;
            }
        }
    }
}
</style>
