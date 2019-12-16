<template>
    <div class="flex-container">
        <div class="range-slider-holder">
            <input
                    type="range"
                    min="1"
                    max="12"
                    value="4"
                    id="distance"
                    class="range-slider"
                    v-model="sliderValue"
            >
            <output for="distance" :value="sliderValue" class="range-slider-tooltip"><span>{{ sliderValue }}</span></output>
        </div>

        <div class="flex-parent"
             :style="{
            'flex-direction': flex_direction,
            'flex-wrap': flex_wrap,
            'justify-content': justify_content,
            'align-items': align_items,
            'align-content': align_content
        }"
        >
            <div :class="['flex-child', {show: HiddenContainer[0]}]" style="background-color: #098b83;">A</div>
            <div :class="['flex-child', {show: HiddenContainer[1]}]" style="background-color: #767575;">B</div>
            <div :class="['flex-child', {show: HiddenContainer[2]}]" style="background-color: #313b3c;">C</div>
            <div :class="['flex-child', {show: HiddenContainer[3]}]" style="background-color: #424cc4;">D</div>
            <div :class="['flex-child', {show: HiddenContainer[4]}]" style="background-color: #c264aa;">E</div>
            <div :class="['flex-child', {show: HiddenContainer[5]}]" style="background-color: #038d9b;">F</div>
            <div :class="['flex-child', {show: HiddenContainer[6]}]" style="background-color: #6a61ff;">G</div>
            <div :class="['flex-child', {show: HiddenContainer[7]}]" style="background-color: #ff617e;">H</div>
            <div :class="['flex-child', {show: HiddenContainer[8]}]" style="background-color: #61ffff;">I</div>
            <div :class="['flex-child', {show: HiddenContainer[9]}]" style="background-color: #ffb961;">J</div>
            <div :class="['flex-child', {show: HiddenContainer[10]}]" style="background-color: #5f1757;">K</div>
            <div :class="['flex-child', {show: HiddenContainer[11]}]" style="background-color: #911046;">L</div>
        </div>

        <div class="flex-actions">
            <div style="flex-grow: 2">
                <p>FLEX-DIRECTION</p>

                <ul>
                    <li>
                        <label>
                            <input type="radio" value="row" v-model="flex_direction"> row (default)
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="row-reverse" v-model="flex_direction"> row-reverse
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="column" v-model="flex_direction"> column
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="column-reverse" v-model="flex_direction"> column-reverse
                        </label>
                    </li>
                </ul>
            </div>
            <div style="flex-grow: 2">
                <p>FLEX-WRAP</p>
                <ul>
                    <li>
                        <label>
                            <input type="radio" value="nowrap" v-model="flex_wrap"> nowrap (default)
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="wrap" v-model="flex_wrap"> wrap
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="wrap-reverse" v-model="flex_wrap"> wrap-reverse
                        </label>
                    </li>
                </ul>
            </div>
            <div style="flex-grow: 2">
                <p>JUSTIFY-CONTENT</p>
                <ul>
                    <li>
                        <label>
                            <input type="radio" value="flex-start" v-model="justify_content"> flex-start (default)
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="flex-end" v-model="justify_content"> flex-end
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="center" v-model="justify_content"> center
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="space-around" v-model="justify_content"> space-around
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="space-between" v-model="justify_content"> space-between
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="space-evenly" v-model="justify_content"> space-evenly
                        </label>
                    </li>
                </ul>
            </div>
            <div style="flex-grow: 2">
                <p>ALIGN-ITEMS</p>
                <ul>
                    <li>
                        <label>
                            <input type="radio" value="stretch" v-model="align_items"> stretch (default)
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="baseline" v-model="align_items"> baseline
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="center" v-model="align_items"> center
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="flex-start" v-model="align_items"> flex-start
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="flex-end" v-model="align_items"> flex-end
                        </label>
                    </li>
                </ul>
            </div>
            <div style="flex-grow: 2">
                <p>ALIGN-CONTENT</p>
                <ul>
                    <li>
                        <label>
                            <input type="radio" value="stretch" v-model="align_content"> stretch (default)
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="center" v-model="align_content"> center
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="flex-start" v-model="align_content"> flex-start
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="flex-end" v-model="align_content"> flex-end
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="space-around" v-model="align_content"> space-around
                        </label>
                    </li>

                    <li>
                        <label>
                            <input type="radio" value="space-between" v-model="align_content"> space-between
                        </label>
                    </li>
                </ul>
            </div>
        </div>

        <div>
 <pre>
     <code>
 {
    display: flex;
    flex-direction: {{flex_direction}};
    flex-wrap: {{flex_wrap}};
    justify-content: {{justify_content}};
    align-items: {{align_items}};
    align-content: {{align_content}};
 }
     </code>
 </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FlexBox",
        data() {
            return {
                flex_direction: 'row',
                flex_wrap: 'nowrap',
                justify_content: 'flex-start',
                align_items: 'stretch',
                align_content: 'stretch',
                sliderValue: 4,
                HiddenContainer: [true, true, true, true],
            }
        },
        watch: {
            'sliderValue': function () {
                this.HiddenContainer = [];
                let rangeValue = this.sliderValue;
                for (let i = 0; i < rangeValue; i++) {
                    this.HiddenContainer[i] = true;
                }
            }
        },
    }
</script>

<style scoped>
    p {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 300px;
    }

    .flex-container > div {
        border: 2px solid #098b83;
        padding: 1rem;
        width: 60%;
    }

    .flex-parent {
        margin: auto;
        border: 2px solid #EEE;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 300px;
    }

    .flex-child {
        padding: 0 30px;
        line-height: 30px;
        font-size: 30px;
        text-align: center;
        color: #FFFFFF;
        display: none;
    }

    .show {
        display: block;
    }

    .flex-actions {
        display: flex;
        flex-wrap: nowrap;
    }

    .flex-actions > div > p {
        color: #767575;
    }

    .flex-actions ul {
        padding-left: 0;
    }

    .flex-actions ul li {
        list-style: none;
        color: #5f5f5f;
        font-size: .85rem;
    }

    pre {
        background-color: #f1f1f1;
    }
</style>