<?php
define('ABSPATH', true);
define('WFS_VERSION', 'preview');
define('WFS_ASSETS', 'assets');

$GLOBALS['POSTS'] = require __DIR__ . '/posts.php';
$GLOBALS['i'] = -1;
$GLOBALS['ONLY'] = null;   // indice de la entrada a renderizar en single

function get_template_part($s){ include $GLOBALS['SRC'] . '/' . $s . '.php'; }
function language_attributes(){ echo 'lang="en"'; }
function bloginfo($x){ echo 'UTF-8'; }
function body_class(){ echo ''; }
function esc_url($u){ return $u; } function esc_attr($s){ return htmlspecialchars($s); }
function esc_html($s){ return htmlspecialchars($s); }
function wp_kses_post($s){ return $s; }
function get_theme_file_uri($p){ return $p; }
function get_theme_file_path($p){ return $GLOBALS['SRC'] . '/' . $p; }
function wp_head(){} function wp_footer(){}
function wp_json_encode($d){ return json_encode($d); }
function rest_url($p){ return '#'; } function esc_url_raw($u){ return $u; }
function wp_create_nonce($a){ return ''; }
function apply_filters($t,$v){ return $v; }
function add_filter(){} function add_action(){}
function get_option($k){ return $k === 'page_for_posts' ? 0 : ''; }
function update_option(){} function flush_rewrite_rules(){}
function cur(){ return $GLOBALS['POSTS'][max(0,$GLOBALS['i'])]; }
function get_permalink($p=null){ $o = is_object($p)?$p:cur(); return 'blog-' . $o->post_name . '.html'; }
function get_page_by_path($s){ return null; }
function wp_insert_post($a){ return 0; }
function get_post($p=null){ return is_object($p) ? $p : cur(); }
function have_posts(){
  if ($GLOBALS['ONLY'] !== null) return $GLOBALS['i'] < $GLOBALS['ONLY'];
  return $GLOBALS['i'] < count($GLOBALS['POSTS']) - 1;
}
function the_post(){ $GLOBALS['i'] = ($GLOBALS['ONLY'] !== null) ? $GLOBALS['ONLY'] : $GLOBALS['i'] + 1; }
function the_permalink(){ echo get_permalink(); }
function the_title(){ echo htmlspecialchars(cur()->post_title); }
function get_the_title($p=null){ return is_object($p)?$p->post_title:cur()->post_title; }
function the_content(){ echo cur()->post_content; }
function has_post_thumbnail($p=null){ $o=is_object($p)?$p:cur(); return !empty($o->thumb); }
function the_post_thumbnail($s,$a){ echo '<img src="'.cur()->thumb.'" alt="'.$a['alt'].'" loading="lazy" decoding="async">'; }
function get_the_excerpt($p=null){ $o=is_object($p)?$p:cur(); return $o->excerpt; }
function wp_trim_words($s,$n){ $w=explode(' ',$s); return implode(' ',array_slice($w,0,$n)) . (count($w)>$n?'…':''); }
function wp_strip_all_tags($s){ return trim(strip_tags($s)); }
function get_the_date($f,$p=null){ $o=is_object($p)?$p:cur(); return date($f, strtotime($o->post_date)); }
function get_the_category($p=null){
  $o = is_object($p) ? $p : cur();
  /* WordPress devuelve terminos completos, con slug. Sin el, el filtro por
     categoria no tendria con que comparar. */
  return [(object)['name'=>$o->cat, 'slug'=>strtolower(str_replace(' ','-',$o->cat))]];
}
function get_the_tags($id=null){ $o=cur(); if($id){ foreach($GLOBALS['POSTS'] as $q){ if($q->ID===$id){$o=$q;break;} } } return array_map(fn($n)=>(object)['name'=>$n,'term_id'=>1], $o->tags); }
function get_tag_link($t){ return 'blog.html'; }
function paginate_links($a){ return null; }
function get_previous_post(){ $i=$GLOBALS['ONLY']; return isset($GLOBALS['POSTS'][$i+1]) ? $GLOBALS['POSTS'][$i+1] : false; }
function get_next_post(){ $i=$GLOBALS['ONLY']; return $i>0 ? $GLOBALS['POSTS'][$i-1] : false; }
function _n($s,$p,$n,$d){ return $n===1?$s:$p; }
function home_url($p=''){ return $p ? 'blog.html' : 'Homepage.html'; }
function wp_parse_url($u,$c=-1){ return parse_url($u,$c); }
function wfs_pages(){ return []; }
function wfs_local_assets(){ return []; }
function wfs_link_map(){ return []; }
/* Se sobrescriben por filtro en vez de redeclarar: blog.php ya las define. */
require $GLOBALS['SRC'] . '/inc/blog.php';
function get_the_author(){ return 'Western Fence Supply'; }
function get_the_author_meta($f,$id=0){ return 'Western Fence Supply'; }
function get_the_ID(){ return cur()->ID; }
function get_categories($a=[]){
  $seen=[]; $out=[];
  foreach ($GLOBALS['POSTS'] as $p) {
    $slug = strtolower(str_replace(' ','-',$p->cat));
    if (isset($seen[$slug])) continue;
    $seen[$slug]=1; $out[] = (object)['name'=>$p->cat,'slug'=>$slug];
  }
  return $out;
}
function get_posts($a=[]){
  $skip = $a['post__not_in'][0] ?? null;
  $out = [];
  foreach ($GLOBALS['POSTS'] as $p) { if ($p->ID !== $skip) $out[] = $p; }
  return array_slice($out, 0, $a['numberposts'] ?? 3);
}
function get_the_post_thumbnail($p,$s,$a){ return '<img src="'.$p->thumb.'" alt="'.$a['alt'].'" loading="lazy">'; }
