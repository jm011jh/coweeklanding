<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once(G5_THEME_PATH.'/head.php');

$id = $_REQUEST['id'];

$sql = "select a.*, date_format(a.open_dt, '%Y.%m.%d') as lec_open_dt
                , c.teacher_nm, c.img1_url, c.img2_url, c.img3_url, c.img4_url
                , b.school_nm
                , (select code_nm from g5_comm_code where code_cls_cd = 'lecture_part_cd' and code_cd = a.lecture_part_cd) as lecture_part_nm
            from g5_lecture a, g5_school b, g5_teacher c
            where a.school_id = b.id
              and a.teacher_id = c.id
            and a.id = {$id}
            ";

$row = sql_fetch($sql);

?>
<script type="text/javascript">
    $(document).ready(function(){
        $("#btnRequest").click(function(){
            var id = $(this).attr("data-id");

            $.ajax({
                url: "/ajax/ajax.request_lecture.php",
                type: "post",
                data: {
                    id: id
                },
                dataType: "json",
                success: function(data) {
                    console.log("request_lecture result = " + JSON.stringify(data));

                    if (data.success) {
                        alert("수강 신청하였습니다.");
                    } else {
                        alert(data.message);
                    }
                }
            })
        })
    })
</script>
    <link rel="stylesheet" href="<?php echo G5_URL ?>/publish/css/public.css">
    <link rel="stylesheet" href="<?php echo G5_URL ?>/publish/css/detail.css">
    <link rel="stylesheet" href="<?php echo G5_URL ?>/publish/css/detailspecial.css">
    <div class="public--container">
        <div class="detail--wrap">
            <div class="detail--thumb">
                <div class="detail--thumb-img">
                    <div class="detail--thumb-bg">
                        <img src="/img/detail_thumb_bg.png" alt="">
                    </div>
                    <div class="detail--thumb-imgTitle">
                        <!--강의분야에 따라 해당 이미지가 변경됩니다.-->
                        <img src="/img/text_<?php echo $row['lecture_part_cd'] ?>.png" alt="">
                    </div>
                    <div class="detail--thumb-cha">
                        <img src="<?php echo $row['img1_url'] ?>" alt="">
                    </div>
                </div>
                <div class="detail--thumb-text">
                    <div class="detail--thumb-text01"><p><?php echo $row['lecture_part_nm'] ?></p></div><!--해당 p요소에 신기술분야가 들어갑니다.-->
                    <div class="detail--thumb-text02"><p><?php echo $row['lecture_nm'] ?></p></div><!--해당 p요소에 강의제목이 들어갑니다.-->
                    <div class="detail--thumb-text03">
                        <p><?php echo $row['teacher_nm'] ?></p><!--해당 요소에 강사이름이 들어갑니다.-->
                        <span></span>
                        <p><?php echo $row['school_nm'] ?></p><!--해당 요소에 강사소속이 들어갑니다.-->
                    </div>
                    <div class="detail--thumb-text04"><!--해당 p요소에 강의목표가 들어갑니다.-->
                        <p><?php echo $row['teacher_nm'] ?></p>
                    </div>
                </div>
            </div>
            <div class="detail--body">
                <div class="detail--body-wrap">
                    <div class="detail--contents">
                        <div class="detail--contents-thumb"><!--강사썸네일 ver.2-->
                            <div class="detail--contents-thumbImg">
                                <img src="<?php echo $row['img2_url'] ?>" alt=""><!--이 곳에 강사사진 2번이 들어갑니다.-->
                            </div>
                            <div class="detail--contents-thumbText"><!--강사인삿말 텍스트가 들어갑니다. 강사인삿말값이 없는 경우에는 해당 소개글의 @@@에 신기술분야, ###에 강사이름이 들어갑니다.-->
                                <p><?php echo $row['lecture_desc1'] ?></p>
                            </div>
                        </div>
                        <div class="detail--contents-recommend"><!--Key point-->
                            <div class="detail--contents-recommend-text01"><p>Key Point</p></div>
                            <div class="detail--contents-recommend-text02">
                                <img src="/img/detail_appo.png" alt="">
                                <?php echo $row['lecture_special_desc1'] ?>
                            </div>
                        </div>
                        <div class="detail--contents-graph">
                            <div class="detail--contents-graph-text01">그래서 '<?php echo $row['teacher_nm'] ?>의 강의가 당신에게 필요합니다.'<br><br></div>
                            <div class="detail--contents-graph-downArrow"><img src="/img/special_down_arrow.png" alt=""></div>
                            <?php echo $row['lecture_special_desc2'] ?>
                            <div class="detail--contents-graph-text01">다른 강연과 차별점은 무엇인가요?</div>
                            <?php echo $row['lecture_special_desc3'] ?>
                        </div>
                        <div class="detail--contents-about detail--contents-about01"><!--Summary-->
                            <div class="detail--contents-about-text01"><p>Summary</p></div>
                            <div class="detail--contents-about-text02"><!--이 곳에 강의 내용 텍스트가 들어갑니다.-->
                                <p><?php echo $row['lecture_special_desc4'] ?></p>
                            </div>
                        </div>
                        <div class="detail--contents-about"><!--강의 후 나는?-->
                            <div class="detail--contents-about-text01"><p>강의 후 나는?</p></div>
                            <div class="detail--contents-about-text02"><!--이 곳에 기대효과 텍스트가 들어갑니다.-->
                                <?php echo $row['lecture_special_desc5'] ?>
                            </div>
                        </div>
                        <div class="detail--contents-about"><!--누구에게 추천하나요?-->
                            <div class="detail--contents-about-text01"><p>누구에게 추천하나요?</p></div>
                            <div class="detail--contents-about-text02"><!--이 곳에 기대효과 텍스트가 들어갑니다.-->
                                <?php echo $row['lecture_special_desc6'] ?>
                            </div>
                        </div>
                        <div class="detail--contents-teacher"><!--강사정보-->
                            <?php
                            $sql2 = "select * from g5_teacher where id = {$row['teacher_id']}";
                            $tinfo = sql_fetch($sql2);


                            ?>
                            <div class="detail--contents-teacher-thumb">
                                <img src="<?php echo $row['img3_url'] ?>" alt=""><!--이 곳에 강사의 3번째 사진이 들어갑니다.-->
                            </div>
                            <div class="detail--contents-teacher-text">
                                <div class="detail--contents-teacher-text01"><p>강사정보</p></div>
                                <div class="detail--contents-teacher-text02"><span>이름</span><p><?php echo $tinfo['teacher_nm'] ?></p></div><!--이 요소의 p요소에 강사이름이 들어갑니다.-->
                                <div class="detail--contents-teacher-text02"><span>소속</span><p><?php echo $tinfo['teacher_nm'] ?></p></div><!--이 요소의 p요소에 강사소속이 들어갑니다.-->
                                <div class="detail--contents-teacher-text02"><span>이메일</span><p><?php echo $tinfo['teacher_email'] ?></p></div><!--이 요소의 p요소에 강사이메일이 들어갑니다.-->
                                <div class="detail--contents-teacher-text01 marginTop40"><p>강사이력</p></div>
                                <div class="detail--contents-teacher-text03"><!--이 요소 안에 li항목으로 강사이력 내용들이 들어갑니다.-->
                                    <ul>
                                        <?php
                                        $sql3 = "select * from g5_teacher_history where teacher_id = {$row['teacher_id']}";
                                        $hres = sql_query($sql3);

                                        for ($i=0;$row2=sql_fetch_array($hres);$i++) {
                                        ?>
                                        <li><p><?php echo $row2['content'] ?></p></li>
                                        <?php
                                        }
                                        ?>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="detail--aside">
                        <div class="detail--aside-wrap">
                            <div class="detail--aside-contents">
                                <div class="detail--aside-text01"><p><?php echo $row['lecture_part_nm'] ?></p></div><!--해당 p요소에 신기술분야가 들어갑니다.-->
                                <div class="detail--aside-text02"><p><?php echo $row['lecture_nm'] ?></p></div><!--해당 p요소에 강의제목이 들어갑니다.-->
                                <span class="detail--aside-line"></span>
                                <div class="detail--aside-button detail--aside-button-blue"><a href="#none" id="btnRequest" data-id="<?php echo $id ?>">수강 신청하기</a></div>
                                <div class="detail--aside-button"><a href="javascript:alert('12월 중 다운로드 가능합니다.')">강의자료 다운로드</a></div>
                                <span class="detail--aside-line"></span>
                                <div class="detail--aside-dropDownButton"><p>강의정보</p><span></span></div>
                                <div class="detail--aside-dropDownMenu">
                                    <div class="detail--aside-dropDownMenuList"><span>날&nbsp;&nbsp;&nbsp;&nbsp;짜</span><p><?php echo $row['lec_open_dt'] ?></p></div><!--이 요소의 p요소에 강의날짜가 들어갑니다.-->
                                    <div class="detail--aside-dropDownMenuList"><span>강의실</span><p><?php echo $row['lecture_location'] ?></p></div><!--이 요소의 p요소에 강의장소가 들어갑니다.-->
                                    <div class="detail--aside-dropDownMenuList"><span>시&nbsp;&nbsp;&nbsp;&nbsp;간</span><p><?php echo $row['lecture_time'] ?></p></div><!--이 요소의 p요소에 강의시간이 들어갑니다.-->
                                </div>
                                <span class="detail--aside-line"></span>
                                <div class="detail--aside-functions" style="display:none;">
                                    <div class="detail--aside-function-button">
                                        <img src="/publish/images/icon_add_wish.png" alt="">
                                        <p>찜하기</p>
                                    </div>
                                    <div class="detail--aside-function-button">
                                        <img src="/publish/images/icon_share.png" alt="">
                                        <p>공유하기</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<?php
include_once(G5_THEME_PATH.'/tail.php');
