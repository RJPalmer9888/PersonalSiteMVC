using System.Web.Mvc;

namespace PersonalSiteMVC.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        //[Authorize]
        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult Links()
        {
            ViewBag.Message = "Your links page.";

            return View();
        }

        [HttpGet]
        public ActionResult Post()
        {
            ViewBag.Message = "Your post page.";

            return View();
        }
    }
}
