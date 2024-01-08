import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/Skull.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={"/posts/werwer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          omnis? Eius exercitationem earum, dolorum quidem maxime labore cumque
          minima voluptates magni saepe sequi aut officiis totam, placeat cum
          officia ipsam in recusandae. Velit accusantium modi distinctio
          molestias sit, magni dolorem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          mollitia. Quisquam repellendus quas, totam quam quo enim iure iste
          quasi fuga cum animi reprehenderit ipsam cumque. Optio aliquid ratione
          nihil distinctio laborum qui quaerat, iste possimus, ducimus
          doloremque porro explicabo. Recusandae saepe illum fuga sapiente ut
          corrupti temporibus consequatur animi natus eum architecto ducimus
          velit, omnis laborum, tempora explicabo inventore odit eveniet ipsam
          illo id?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          similique placeat incidunt porro in fugiat sequi saepe, possimus
          aperiam expedita, blanditiis, cupiditate sapiente quod sint
          accusantium molestias laudantium provident praesentium suscipit quae?
          Nulla, ipsa! Temporibus esse tempore accusamus sequi maxime laborum
          illum ad perferendis placeat vitae, necessitatibus doloremque rerum,
          harum dolore. Impedit iste dolores illo recusandae, autem ad
          repudiandae sequi sed blanditiis fugiat dolore quaerat rerum sint
          atque quisquam. Quod veritatis quos, voluptatibus neque praesentium
          ipsa architecto officiis est eos necessitatibus excepturi. Quos qui
          numquam, natus explicabo iste quibusdam cum? Porro reprehenderit dicta
          ea autem eum labore ipsa! Perferendis aliquam ullam officia corrupti
          ducimus? Enim eos exercitationem facilis vitae quaerat, labore
          voluptatibus laborum suscipit harum dolor minus quas, aut dolorem
          ipsum sit neque earum! Magnam, quam dicta ipsum voluptas blanditiis
          aliquam consectetur. Facilis cum non impedit laboriosam quibusdam
          eveniet nemo quis voluptates cupiditate a. Aperiam, temporibus fugiat
          pariatur officiis dolor modi odit sunt officia.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quaerat
          id nostrum cumque consequuntur esse voluptatum officia magni
          distinctio vero consectetur aut sint rem ad alias repellendus
          perspiciatis odio necessitatibus modi quod pariatur, placeat
          asperiores explicabo maiores. Ratione, possimus ipsum. Quas
          exercitationem consequatur adipisci cumque doloribus reprehenderit
          iusto commodi porro repellat labore maxime tenetur expedita,
          cupiditate inventore, rem dolore? Ipsa deserunt pariatur nemo saepe
          laborum aspernatur velit ad mollitia numquam aliquid obcaecati
          perferendis deleniti quis illum corporis iusto, doloribus laboriosam.
          Tempora, quisquam omnis quis nemo odio libero eius exercitationem
          itaque in voluptatem, sunt asperiores, doloribus architecto officia
          quia. Vitae non velit sit iste quae quod quibusdam esse doloribus
          inventore quam aperiam, minus ipsum cumque illum corporis nulla
          ratione error ad, est in exercitationem consequatur! Aspernatur non
          quaerat pariatur hic ab ad necessitatibus provident omnis facere nemo.
          Voluptatibus mollitia impedit vel consequuntur officiis esse inventore
          vero a voluptate itaque dolor ab aspernatur tenetur optio ut odit
          saepe voluptatem cumque molestiae error est, rem, fugiat iusto. A
          quisquam sequi facere tempora eveniet molestias, ipsa ex voluptatem
          perspiciatis odit nemo animi sit asperiores consectetur cupiditate et,
          eos beatae dolor tenetur maiores voluptatibus quo neque optio harum.
          Cumque alias aliquid cum totam fugiat rem earum velit, dignissimos
          nostrum animi eveniet ullam ipsa repudiandae molestias porro a
          consequatur quas reiciendis architecto nam sit ut optio nesciunt?
          Expedita optio voluptate illo explicabo deserunt nulla sunt sint ipsa
          pariatur dolorum assumenda illum, placeat quidem facilis, eius quaerat
          dicta? Perspiciatis nobis perferendis, ex iusto nisi consequuntur
          debitis est.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aliquam vero magnam blanditiis. Obcaecati laudantium molestias aliquid
          ipsam ab quisquam.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
