import InfoCard from "../Card";
import Navbar from "../Navbar";
import img from "../Images/mypic.JPG"
import img2 from "../Images/dev.png"

export default function About() {
    return (
        <>
            <Navbar />
            <div className="container">

                <div className="row p-sm-3 mt-5  justify-content-center">
                    <div className="col-10 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mx-auto text-center ">
                        <InfoCard title="Developer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque perspiciatis, earum sint sapiente suscipit?" img={img} btnName="View My LinkedIn" redirect="https://www.linkedin.com/in/muhammad-ammar-a6066a245/" />
                    </div>

                    <div className="col-10 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mx-auto text-center ">
                        <InfoCard title="Developer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque perspiciatis, earum sint sapiente suscipit?" img={img2} btnName="View My LinkedIn" redirect="https://www.linkedin.com/in/muhammad-ammar-a6066a245/" />
                    </div>

                    <p className="text-white mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam magni quidem deleniti, eius ab illo neque cupiditate beatae dolorem, esse quibusdam aliquam earum. Nam eius alias et ab doloribus dolore veniam error nostrum magnam, voluptates fuga obcaecati quas natus fugiat dicta maxime, ea aliquam repellat blanditiis. Nemo esse ipsum sed quos architecto qui consequatur aperiam laboriosam rerum atque facilis officia animi deserunt eos a distinctio quasi maiores sint assumenda, sunt dolorum harum perspiciatis. Ullam placeat ipsum et libero cumque dicta itaque reiciendis sequi veritatis possimus. Enim ex explicabo facilis necessitatibus, sapiente, ab consectetur obcaecati, dignissimos itaque est quibusdam mollitia unde. Accusamus quas alias doloribus tempora dolorum reprehenderit dignissimos fuga earum praesentium culpa, ipsam laboriosam dicta eaque autem? Optio soluta ipsum velit laborum libero provident reiciendis voluptas est aperiam iusto. Illo qui possimus fugiat? Accusamus architecto non, quod repellat inventore perspiciatis nobis, eos, molestias suscipit magni alias vel repellendus iusto corporis sint. Laboriosam voluptates iure tenetur perspiciatis veniam excepturi corrupti nobis veritatis, eaque ducimus doloremque asperiores reiciendis esse velit iste totam! Libero sequi fuga adipisci est! Numquam quam fugit voluptatem autem consequatur neque nihil itaque! Dolore, magnam? Harum maiores nobis, dolorum expedita enim impedit eum minima quisquam iusto! Doloribus eaque in voluptatum, dolores atque ipsam veritatis quaerat debitis quidem iure labore ea quae a enim recusandae odit adipisci officiis perferendis alias impedit. Tenetur ea aut dolorum iusto voluptatum cum nulla distinctio earum suscipit eius praesentium iste, sit laudantium dolor, optio saepe incidunt necessitatibus quae. Quas earum accusamus perspiciatis molestiae porro aspernatur aperiam odit blanditiis amet commodi reprehenderit, et, similique non hic quos eligendi possimus, quis ratione quisquam cupiditate vero. Ipsum ut perspiciatis nostrum iure sit impedit ea amet alias velit tempora nam quaerat, aliquam reprehenderit autem eaque facere saepe, vero provident voluptatum omnis commodi iste delectus consequuntur earum. Facere neque molestias et. Nostrum libero molestiae debitis quo ipsa pariatur tempore temporibus qui at quisquam nihil perspiciatis cumque ullam vel repellat velit itaque placeat voluptates iure praesentium id, iste voluptatem nemo? Harum in totam tempore possimus, eos necessitatibus eveniet eius error. Maiores facere magni, eveniet totam reiciendis quis temporibus ab odit excepturi iure, amet aliquid odio ducimus nesciunt sequi. Ex, facere earum. Voluptatem fugiat odit sunt sed, aperiam veniam architecto id, voluptatum porro quam ex amet corrupti repellat nam quibusdam nostrum earum laborum fugit eius totam, minus molestias. In voluptates iste facere dicta esse fuga magnam quis id rerum debitis blanditiis, officia iusto voluptate cumque minus commodi possimus quisquam, voluptatibus alias sunt quam eum nemo error labore. At debitis dolorum atque architecto reprehenderit, tempore quae cumque repellendus dolor, excepturi odit quam? Ut dicta modi aliquid corrupti molestiae! Quis accusantium, esse suscipit illo rem iure tempore est cum, animi explicabo ipsam ducimus dolore sint pariatur labore. Qui natus itaque accusamus ducimus perferendis, quia voluptates! Id quis culpa quaerat sit incidunt corrupti animi eos? Minima error unde eos labore, delectus molestias voluptas vel. Voluptate adipisci dolore velit commodi maiores cum deleniti, possimus expedita neque inventore fuga, distinctio sit ea id rem, delectus perspiciatis eligendi.</p>
                </div>
            </div>
        </>
    )
}