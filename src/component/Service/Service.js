import data1 from './service1.json'
import data2 from './service2.json'
import data3 from './service3.json'
import styles from './service.module.css'
import Card from './Card'
export default function Service(){
    return(
        <>
        <div className={styles.container1}>
            <div className={styles.container2}>
        <div className={styles.container}>
            {data1.map((q, i) => (<div className={styles.item} key={i}>{i+1}. {q.service}</div>))}
        </div>

        <div className={styles.container}>
            <div className={styles.title}>
            Standart proqram təminatının çatdırılması və quraşdırılması üzrə xidmət çərçivəsində biz aşağıdakı xidmətləri göstəririk:
            </div>
            {data2.map((q, i) => (<div className={styles.item} key={i}>{i+1}. {q.service}</div>))}

        </div>

        <div className={styles.container}>
            <div className={styles.title}>
            Sistemin sazlanması (adaptasiyası) və tətbiqi zərurəti yaranarsa, biz əlavə xidmətlər göstərməyə hazırıq. <br/>
Əgər sizin şirkətin tipik həllin funksionallığını genişləndirməyə ehtiyacı varsa (xüsusi hesabatlar, sənədlər tələb olunursa, siz uçotun aparılmasının təşkilinin unikal sxemlərindən istifadə edirsiniz və s.), bizim mütəxəssislər onun sonrakı tətbiqi ilə konfiqurasiyanın uyğunlaşdırılması (sazlanması) üzrə işləri aparmağa hazırdırlar.:

            </div>
            {data3.map((q, i) => (<div className={styles.item} key={i}>{i+1}. {q.service}</div>))}

        </div>       
             </div>
        <Card/>
        </div>
        </>
    )
}